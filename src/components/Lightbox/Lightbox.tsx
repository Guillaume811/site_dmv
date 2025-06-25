import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import { GalleryType } from '../../types/gallery.types';
import styles from './Lightbox.module.scss';

type LightboxProps = {
  pictures: GalleryType[];
  index: number;
  onClose: () => void;
  onNext: () => void; // conservés pour compatibilité
  onPrev: () => void;
};

const Lightbox: React.FC<LightboxProps> = ({ pictures, index, onClose }) => {
  // Empêche le scroll de la page arrière-plan
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.overlay__content}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className={styles.overlay__content__close}
          onClick={onClose}
        >
          ×
        </button>

        <Swiper
          modules={[Navigation, Pagination, Keyboard]}
          initialSlide={index}
          navigation
          pagination={{ clickable: true }}
          keyboard={{ enabled: true }}
          loop={false}
          className={styles.swiperContainer}
        >
          {pictures.map((picture, i) => (
            <SwiperSlide key={i}>
              <img
                src={picture.pictureUrl}
                alt={picture.pictureAlt}
                className={styles.overlay__content__picture}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Lightbox;
