import { useEffect, useRef, useState } from "react";
import { Container, Stack, Typography, Button } from "../common";
import {
  HOME_PAGE_CONFIG,
  FEATURE_PAGE_CONFIG,
  FEATURE_CARD_CONFIG,
} from "@/constants";
import { useNotification } from "@/helper";
import { Pagination } from "@mui/material";
import { ColorPalette } from "@/styles/color";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

function HomePage() {
  const {
    HEADER_CONFIG,
    SUB_HEADER_CONFIG,
    INPUT_FIELD,
    SUB_HEADER_COUNT,
    NOTIFICATIONS_MESSAGES,
  } = HOME_PAGE_CONFIG;
  const textRef = useRef(null);

  gsap.registerPlugin(TextPlugin);

  const phrase = "Simplify, Tailor, Win with Our AI Resume Reviewer";

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

      tl.to(textRef.current, {
        duration: 3,
        text: phrase,
        ease: "none",
      }).to(textRef.current, {
        duration: 3,
        delay: 2,
        text: "",
        ease: "none",
      });
    }, [textRef]);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Container
        containerProps={{
          className: "h-[100%] flex flex-col  gap-36",
        }}
      >
        <Stack
          stackProps={{
            justifyContent: "center",
            mt: 12,
            alignItems: "center",
            gap: { xs: 8, sm: 4 },
            hight: "100vh",
          }}
        >
          <Stack
            stackProps={{
              alignItems: "center",
              width : { xs: "100%", sm: "100%" },

            }}
          >
            <Typography {...SUB_HEADER_COUNT} />
            <div className="h-[100px]">
              <Typography ref={textRef} {...HEADER_CONFIG} />
            </div>
          </Stack>
          <Typography {...SUB_HEADER_CONFIG} />
          <Button
            buttonProps={{
              variant: "contained",
              children: "Get Started",
              sx: {
                backgroundColor: ColorPalette.buttonPrimary,
                color: ColorPalette.primary,
                padding: "10px 20px",
                borderRadius: "50px",
              },
            }}
          />
        </Stack>
        {/* <Stack
          stackProps={{
            direction: "column",
            gap: 2,
            alignItems: "center",
          }}
        >
          <Stack
            stackProps={{
              alignItems: "center",
              spacing: 2,
            }}
          >
            <Typography {...FEATURE_PAGE_CONFIG.HEADER_CONFIG} />
            <Typography {...FEATURE_PAGE_CONFIG.SUB_HEADER} />

            <Stack
              stackProps={{
                direction: "row",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: 4,
                mt: 4,
              }}
            >
              {FEATURE_PAGE_CONFIG.FEATURES.map((feature, idx) => (
                <Stack
                  key={idx}
                  stackProps={{
                    sx: {
                      width: { xs: "100%", sm: "280px" },
                      padding: 3,
                      backgroundColor: "#f9f9f9",
                      borderRadius: 3,
                      boxShadow: "0px 4px 10px rgba(0,0,0,0.05)",
                      transition: "0.3s",
                      "&:hover": {
                        boxShadow: "0px 6px 20px rgba(0,0,0,0.1)",
                      },
                    },
                    spacing: 1.5,
                  }}
                >
                  <Typography
                    {...FEATURE_CARD_CONFIG.TITLE_CONFIG(feature.title)}
                  />
                  <Typography
                    {...FEATURE_CARD_CONFIG.DESCRIPTION_CONFIG(
                      feature.description
                    )}
                  />
                </Stack>
              ))}
            </Stack>
          </Stack>
        </Stack> */}
      </Container>
    </>
  );
}

export default HomePage;
