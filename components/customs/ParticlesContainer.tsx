"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Container } from "tsparticles-engine";

const ParticlesContainer = () => {
  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  //   const particlesLoaded = useCallback(async () => {}, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container);
    },
    []
  );
  return (
    <Particles
      className="fixed inset-[0%_0%_0%_0%] -z-[999] bg-red-500/0 opacity-70"
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "",
          },
        },
        fullScreen: {
          enable: false,
        },
        detectRetina: true,
        duration: 0,
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },

            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 10,
            },

            repulse: {
              distance: 200,
              duration: 0.4,
            },
            slow: {
              factor: 3,
              radius: 200,
            },
          },
        },

        particles: {
          collisions: {
            enable: true,
          },
          color: {
            value: "#E68E2E",
          },

          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 100,
          },
          opacity: {
            value: 0.5,
          },

          shape: {
            type: "circle",
          },
          size: {
            value: {
              min: 1,
              max: 3,
            },
          },

          links: {
            color: {
              value: "#F5D393",
            },

            distance: 150,
            enable: true,
            frequency: 1,
            opacity: 0.5,
          },
        },
      }}
    />
  );
};

export default ParticlesContainer;
