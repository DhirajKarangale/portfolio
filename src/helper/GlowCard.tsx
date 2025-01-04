"use client"

import React, { useEffect } from 'react';

interface GlowCardProps {
  children: React.ReactNode; // This accepts any React elements as children
  identifier: string;        // identifier is a string for the specific GlowCard
}

const GlowCard: React.FC<GlowCardProps> = ({ children, identifier }) => {
  useEffect(() => {
    const CONTAINER = document.querySelector(`.glow-container-${identifier}`) as HTMLElement;
    const CARDS = document.querySelectorAll(`.glow-card-${identifier}`) as NodeListOf<HTMLElement>;

    const CONFIG = {
      proximity: 40,
      spread: 80,
      blur: 12,
      gap: 32,
      vertical: false,
      opacity: 0,
    };

    const UPDATE = (event: MouseEvent | null) => {
      for (const CARD of CARDS) {
        const CARD_BOUNDS = CARD.getBoundingClientRect();

        // Ensure event is not null or undefined
        const mouseX = event?.x ?? 0; // Fallback to 0 if undefined
        const mouseY = event?.y ?? 0; // Fallback to 0 if undefined

        if (
          mouseX > CARD_BOUNDS.left - CONFIG.proximity &&
          mouseX < CARD_BOUNDS.left + CARD_BOUNDS.width + CONFIG.proximity &&
          mouseY > CARD_BOUNDS.top - CONFIG.proximity &&
          mouseY < CARD_BOUNDS.top + CARD_BOUNDS.height + CONFIG.proximity
        ) {
          CARD.style.setProperty('--active', '1');
        } else {
          CARD.style.setProperty('--active', CONFIG.opacity.toString());
        }

        const CARD_CENTER = [
          CARD_BOUNDS.left + CARD_BOUNDS.width * 0.5,
          CARD_BOUNDS.top + CARD_BOUNDS.height * 0.5,
        ];

        let ANGLE =
          (Math.atan2(mouseY - CARD_CENTER[1], mouseX - CARD_CENTER[0]) *
            180) / Math.PI;

        ANGLE = ANGLE < 0 ? ANGLE + 360 : ANGLE;

        CARD.style.setProperty('--start', `${ANGLE + 90}`);
      }
    };

    document.body.addEventListener('pointermove', (e) => UPDATE(e as MouseEvent));

    const RESTYLE = () => {
      if (CONTAINER) {
        CONTAINER.style.setProperty('--gap', `${CONFIG.gap}`);
        CONTAINER.style.setProperty('--blur', `${CONFIG.blur}`);
        CONTAINER.style.setProperty('--spread', `${CONFIG.spread}`);
        CONTAINER.style.setProperty(
          '--direction',
          CONFIG.vertical ? 'column' : 'row'
        );
      }
    };

    RESTYLE();
    UPDATE(null);

    // Cleanup event listener
    return () => {
      document.body.removeEventListener('pointermove', (e) => UPDATE(e as MouseEvent));
    };
  }, [identifier]);

  return (
    <div className={`glow-container-${identifier} glow-container`}>
      <article className={`glow-card glow-card-${identifier} h-fit cursor-pointer border border-[#2a2e5a] transition-all duration-300 relative bg-[#101123] text-gray-200 rounded-xl hover:border-transparent w-full`}>
        <div className="glows"></div>
        {children}
      </article>
    </div>
  );
};

export default GlowCard;