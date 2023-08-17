import { Box, Button, Grid, Stack, Typography, styled } from "@mui/material";
import { Progress } from "antd";
// import Banner from "./Banner";

const ProgressSection = () => {
  const StyledDashboardWrapper = styled(Box)({
    // padding: "0 66px",
    backgroundColor: "#F5F5FF",
  });
  const CustomWrapper = styled(Box)({
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "1rem",
  });
  const ProgressWrapper = styled(Box)({
    display: "flex",
    justifyContent: "space-between",
    width: "90%",
    //   marginBottom: "1rem",
  });
  const ButtonWrapper = styled(Button)({
    background: "#3F4254",
    color: "#fff",
  });
  const CoursesCardWrapper = styled(Box)({
    borderRadius: "27px",
    background: "#FFF",
    boxShadow: "0px 8px 14px 3px rgba(0, 0, 0, 0.05)",

    display: "flex",
    flexDirection: "column",
    padding: "1.5rem",
    gap: "13px",
  });
  return (
    <StyledDashboardWrapper>
      <CustomWrapper>
        <Typography fontSize={"24px"} fontWeight={700} color={"#9597AB"}>
          Progress
          <Typography fontSize={"16px"} fontWeight={500} color={"#B5B5C3"}>
            More than 400+ new course
          </Typography>
        </Typography>

        <Stack direction="row" spacing={2}>
          <Button variant="text">Month</Button>
          <Button variant="text">Week</Button>
          <ButtonWrapper variant="contained" href="#contained-buttons">
            Day
          </ButtonWrapper>
        </Stack>
      </CustomWrapper>
      <CoursesCardWrapper>
        <Stack sx={{ width: "100%", color: "grey.500" }} spacing={2}>
          <Grid container spacing={2}>
            <Grid item xs={8} alignItems={"center"} display={"flex"}>
              <Typography fontSize={"20px"} fontWeight={700} color={"#656673"}>
                FRX101- introductions ti trade overview
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <ProgressWrapper>
                <Typography
                  fontSize={"16px"}
                  fontWeight={500}
                  color={"#B5B5C3"}
                >
                  100%
                </Typography>
                <Typography
                  fontSize={"16px"}
                  fontWeight={500}
                  color={"#B5B5C3"}
                >
                  Completed
                </Typography>
              </ProgressWrapper>
              <Progress
                percent={100}
                showInfo={false}
                style={{ width: "90%" }}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={8} alignItems={"center"} display={"flex"}>
              <Typography fontSize={"20px"} fontWeight={700} color={"#656673"}>
                FRX102-pips, lots & unite
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <ProgressWrapper>
                <Typography
                  fontSize={"16px"}
                  fontWeight={500}
                  color={"#B5B5C3"}
                >
                  20%
                </Typography>
                <Typography
                  fontSize={"16px"}
                  fontWeight={500}
                  color={"#B5B5C3"}
                >
                  Progress
                </Typography>
              </ProgressWrapper>
              <Progress
                percent={20}
                showInfo={false}
                style={{ width: "90%" }}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={8} alignItems={"center"} display={"flex"}>
              <Typography
                fontSize={"20px"}
                fontWeight={700}
                color={"#656673"}
                alignSelf={"center"}
              >
                FRX102-pips, lots & unite
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <ProgressWrapper>
                <Typography
                  fontSize={"16px"}
                  fontWeight={500}
                  color={"#B5B5C3"}
                >
                  0%
                </Typography>
                <Typography
                  fontSize={"16px"}
                  fontWeight={500}
                  color={"#B5B5C3"}
                >
                  Progress
                </Typography>
              </ProgressWrapper>
              <Progress percent={0} showInfo={false} style={{ width: "90%" }} />
            </Grid>
          </Grid>
        </Stack>
      </CoursesCardWrapper>
    </StyledDashboardWrapper>
  );
};

export default ProgressSection;
