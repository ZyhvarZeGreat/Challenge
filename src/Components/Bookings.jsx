import React from "react";
import "./Bookings.css";
import booking_img from "../assets/booking.jpg";
import {
  UilMapMarkerPlus,
  UilTransaction,
  UilTaxi,
  UilLocationArrow,
  UilMap,
  UilPagelines,
  UilHeart,
  UilBuilding,
} from "@iconscout/react-unicons";
import { Grid, Stack, Box, useTheme, useMediaQuery } from "@mui/material";
import booking_img_1 from "../assets/london.jpg";
const Bookings = () => {
  const theme = useTheme();
  const query = useMediaQuery(theme.breakpoints.up("lg"));
  const bookings_desc_data = [
    {
      icon: <UilMapMarkerPlus stroke="" fill="#fff" />,
      title: "Choose Your Destination",
      desc: "Choose your dream destination and let us take care of the rest. From booking flights and hotels to arranging transportation.",
      bgColor: "var(--primary-color)",
    },
    {
      icon: <UilTransaction stroke="" fill="#fff" />,
      title: "Make payments",
      desc: "Make your next trip hassle-free with our one-stop destination for travel and payments.",
      bgColor: "var(--secondary-color)",
    },
    {
      icon: <UilTaxi stroke="" fill="#fff" />,
      title: "Travel ",
      desc: "Escape to paradise and leave the stress behind with our easy travel and payment options.",
      bgColor: "var(--tertiary-color)",
    },
  ];
  return (
    <section
      style={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
      className="Jadoo_Bookings"
    >
      <Grid
        xs={11}
        height={query ? " 30rem" : ""}
        container
        className="Jadoo_Bookings_Container"
      >
        <Grid
          xs={12}
          md={6}
          sx={{
            gap: "2rem",
            display: "flex",
            flexDirection: "column",
            alignItems: `${query ? "center" : "flex-start"}`,
            justifyContent: "space-between",
            height: "100%",
          }}
          item
          className="Jadoo_Bookings_Text"
        >
          <Stack
            height={query ? "10rem" : ''}
            gap="1rem"
            width="100%"
            textAlign={query ? "start" : 'center'}
            alignItems={query ? "flex-start" : 'center'}
            justifyContent={query ? "flex-start" : 'center'}
            className="Jadoo_Bookings_Text_Header"
          >
            <p>Easy and Fast</p>
            <h1>
              {" "}
              Book Your Next Trip <br /> in 3 Easy Steps{" "}
            </h1>
          </Stack>

          <Stack
            direction="column"
            height={query ? "24rem" : "40rem"}

            gap={query ? "2rem" : '1rem'}
            alignItems={query ? "flex-start" : 'center'}
            justifyContent="center"
            className="Jadoo_Bookings_Desc"
            width="100%"
          >
            {bookings_desc_data.map((booking) => {
              const { icon, title, desc, bgColor } = booking;
              return (
                <Stack
                  gap="1rem"
                  height="12rem"
                  width="100%"
                  alignItems="flex-start"
                  direction="row"
                  justifyContent="flex-start"
                  key={title}
                >
                  <Stack
                    borderRadius="20%"
                    backgroundColor={bgColor}
                    alignItems="center"
                    justifyContent="center"
                    height="3rem"
                    width="3rem"
                  >
                    {icon}
                  </Stack>
                  <Stack
                    width="80%"
                    className="Jadoo_Bookings_Desc_Text"
                    direction="column"
                  >
                    <h2 className="Jadoo_Bookings_Desc_Title">{title}</h2>
                    <p className="Jadoo_Bookings_Desc_Subtitle">{desc}</p>
                  </Stack>
                </Stack>
              );
            })}
          </Stack>
        </Grid>

        <Grid
          item
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
          xs={12}
          md={6}
          className="Jadoo_Bookings_CTA"
        >
          <Stack
            alignItems="center"
            direction="column"
            width="90%"
            marginRight={query ? "3rem" : "0rem"}
            className="Jadoo_Bookings_CTA_Container"
          >
            <Box
              height="15rem"
              width="15rem"
              backgroundColor="#59B1E6"
              className="Jadoo_Bookings_Blur_Filter_Underlay"
            ></Box>

            <Stack
              backgroundColor="white"
              alignItems="center"
              justifyContent="center"
              className="Jadoo_Bookings_CTA_Card"
              height={"24rem"}
              width={query ? "23rem" : "21rem"}
            >
              <Stack
                width="95%"
                direction="column"
                alignItems="center"
                gap="1rem"
                justifyContent="center"
                className="Jadoo_Bookings_CTA_Card_Container"
                height="95%"
              >
                <Box
                  width="95%"
                  height="10rem"
                  className="Jadoo_Bookings_CTA_Card_Image"
                >
                  <img src={booking_img} alt="" />
                </Box>
                <Stack
                  width="95%"
                  alignItems="flex-start"
                  justifyContent="center"
                >
                  <h3 className="Jadoo_Bookings_CTA_Card_Header">
                    trip to greece
                  </h3>
                  <p className="Jadoo_Bookings_CTA_Card_Paragraph">
                    14-29 june by robbin jules
                  </p>
                </Stack>

                <Stack
                  width="95%"
                  direction="row"
                  gap="1rem"
                  className="Jadoo_Bookings_CTA_CArd_Icons"
                >
                  <Box
                    borderRadius="50%"
                    stroke="#84829A"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    backgroundColor="#F5F5F5"
                    height="3rem"
                    width="3rem"
                  >
                    <UilPagelines />
                  </Box>

                  <Box
                    borderRadius="50%"
                    stroke="#84829A"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    backgroundColor="#F5F5F5"
                    height="3rem"
                    width="3rem"
                  >
                    <UilMap />
                  </Box>
                  <Box
                    borderRadius="50%"
                    stroke="#84829A"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    backgroundColor="#F5F5F5"
                    height="3rem"
                    width="3rem"
                  >
                    <UilLocationArrow />
                  </Box>
                </Stack>

                <Stack
                  direction="row"
                  alignItems="flex-start"
                  justifyContent="center"
                  width="95%"
                >
                  <Stack
                    marginLeft=".5rem"
                    justifySelf="center"
                    direction="row"
                    className="Jadoo_Card_Desc_Container"
                    width="95%"
                    alignItems="center"
                    justifyContent="flex-start"
                    gap="1rem"
                  >
                    <UilBuilding />
                    <p> 24 People going</p>
                  </Stack>

                  <Box className="Jadoo_Bookings_CTA_Cards_Favorite_Button">
                    <button>
                      <UilHeart />
                    </button>
                  </Box>
                </Stack>
              </Stack>
            </Stack>

            <Stack
              gap="1rem"
              borderRadius="10px"
              height="8.0625rem"
              width="16.4375rem"
              backgroundColor="#fff"
              display="flex"
              direction="row"
              alignItems="center"
              justifyContent="center"
              className="Jadoo_Bookings_CTA_Overlay"
            >
              <Stack
                direction="row"
                width="95%"
                alignItems="flex-start"
                justifyContent="center"
                className="Jadoo_Bookings_CTA_Overlay_Top"
              >
                <img src={booking_img_1} alt="booking img" />
                <Stack></Stack>
                <Stack
                  marginLeft="1rem"
                  gap=".1rem"
                  width="95%"
                  alignItems="flex-start"
                  justifyContent="center"
                  className="Jadoo_Bookings_CTA_Overlay_Bottom"
                >
                  <p>Ongoing</p>
                  <h3> Trip to rome </h3>

                  <label for="file">
                    <span>40%</span>
                    completed
                  </label>

                  <div class="progress-container">
                    <progress value="40" max="100">75%</progress>
                  </div>

                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </section>
  );
};

export default Bookings;
