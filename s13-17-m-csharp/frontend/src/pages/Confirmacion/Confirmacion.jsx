import React, { useState, useEffect } from 'react';
import style from './Confirmacion.module.css';
import Loader from '../../components/shared/Loader/Loader';
import { Fade } from 'react-awesome-reveal';

const Confirmacion = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {showLoader ? (
        <Loader />
      ) : (
        <Fade className="w-full flex justify-center" cascade triggerOnce={true}>
          <main className="flex justify-center content-center mt-[120px] text-center">
            <div className={style.container}>
              <section>
                <h2>¡Tu turno ha sido confirmado!</h2>
              </section>
              <section className="flex justify-center">
                <img src="Confirmed2.svg" alt="" />
              </section>
              <section>
                <p>No olvides cancelar tu turno en caso de no poder asistir.</p>
                <p>
                  <a href="#">Cancelar turno.</a>
                </p>
              </section>
            </div>
          </main>
        </Fade>
      )}
    </div>
  );
};

export default Confirmacion;
