import { useEffect, useRef } from "react";
import { Container, Stack, Typography, Button } from "../common";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRouter } from "next/router";
import { ColorPalette } from "@/styles/color";

gsap.registerPlugin(ScrollTrigger);

function StatsSection() {
  const cardsRef = useRef([]);
  const sectionRef = useRef(null);

  const stats = [
    { value: "350+", label: "Total Users" },
    { value: "180+", label: "Resumes Reviewed" },
    { value: "6+", label: "Industries Covered" },
    { value: "81+", label: "Cover Letters Enhanced" },
  ];

  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (cardsRef.current.length) {
        gsap.from(cardsRef.current, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
          opacity: 0,
          y: 50,
          duration: 1,
          stagger: 1, 
          ease: "power3.out",
        });
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []); 

  return (
    <Container
      containerProps={{
        className: "height-100vh flex flex-col mt-14 items-center py-12",
        ref: sectionRef, // Uncommented this line
      }}
    >
      <Stack
        stackProps={{
          direction: { xs: "column-reverse", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          gap: 6,
        }}
      >
        <div className="grid grid-cols-2 gap-4 md:gap-6">
          {stats.map((item, idx) => (
            <div
              ref={(el) => {
                if (el) cardsRef.current[idx] = el;
              }}
              key={idx}
              className="rounded-xl border border-gray-200 bg-white px-6 py-6 shadow-sm"
            >
              <Typography
                typographyProps={{
                  variant: "h5",
                  sx: { color: ColorPalette.buttonPrimary, fontWeight: 700 },
                  children: item.value,
                }}
              />
              <Typography
                typographyProps={{
                  variant: "body1",
                  sx: { color: "#555", fontWeight: 500 },
                  children: item.label,
                }}
              />
            </div>
          ))}
        </div>

        <Stack
          stackProps={{
            spacing: 2,
            sx: { maxWidth: "450px", textAlign: { xs: "center", md: "left" } },
          }}
        >
          <Typography
            typographyProps={{
              variant: "h4",
              sx: { fontWeight: 700, color: ColorPalette.secondary },
              children: "Impressive Figures and Facts",
            }}
          />
          <Typography
            typographyProps={{
              variant: "body1",
              sx: { color: ColorPalette.subHeading },
              children:
                "Explore our key statistics and milestones that showcase our growth, impact, and success in transforming the job application journey.",
            }}
          />
          <Stack
            stackProps={{
              direction: "row",
              spacing: 2,
              justifyContent: "center",
              mt: 2,
            }}
          >
            <Button
              buttonProps={{
                variant: "contained",
                children: "Login",
                sx: {
                  borderRadius: "50px",
                  backgroundColor: ColorPalette.buttonPrimary,
                  color: ColorPalette.primary,
                  px: 3,
                },
              }}
              onClick={() => {
                router.push("/login");
              }}
            />
            <Button
              buttonProps={{
                variant: "outlined",
                children: "Contact Us",
                sx: {
                  borderRadius: "50px",
                  color: ColorPalette.buttonPrimary,
                  borderColor: ColorPalette.buttonPrimary,
                  px: 3,
                },
              }}
              onClick={() => {
                router.push("https://dilip-kashyp.github.io/");
              }}
            />
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
}

export default StatsSection;
