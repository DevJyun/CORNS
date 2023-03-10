import { React, useEffect } from "react";
import useAxios from "auth/useAxios";
import ExperienceInfo from "components/Conversation/ExperienceInfo";
import sungsil_crown from "assets/sungsil_crown.png";
import { Box, Grid, Typography } from "@mui/material";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function ExperienceIndicator({}) {
  const { data, status, isLoading, sendRequest } = useAxios();
  const nickName = sessionStorage.getItem("nickname");
  const userId = sessionStorage.getItem("userId");

  // useAxios 활용
  useEffect(() => {
    sendRequest({
      url: `${process.env.REACT_APP_HOST}/growth/exp/${userId}`,
    });
  }, []);

  return (
    <>
      <Grid container>
        <Grid item xs={4}>
          <Box
            sx={{
              border: "3px solid #111",
              height: "265px",
              mr: "1.5rem",
              p: "2rem",
              boxSizing: "border-box",
            }}
          >
            <Box
              sx={{
                display: "flex",
                backgroundColor: "#FFA903",
                height: "100%",
                p: "1rem",
                boxSizing: "border-box",
                boxShadow: "4px 4px 4px rgba(0,0,0,0.25)",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "85px",
                  height: "85px",
                  backgroundColor: "#fff",
                  borderRadius: "100px",
                  border: "3px solid #111",
                  mr: "1rem",
                }}
              >
                <img
                  src={sungsil_crown}
                  css={css`
                    width: 48px;
                    height: 48px;
                  `}
                  alt="성실왕관"
                />
              </Box>
              {isLoading && <p>loading 중...</p>}
              {!isLoading && status === 200 && (
                <p
                  css={css`
                    width: 60%;
                    font-size: 18px;
                    font-weight: bold;
                  `}
                >
                  {nickName}님의 경험치는
                  <br /> 상위 {data.percentile}% 입니다.
                </p>
              )}
            </Box>
          </Box>
        </Grid>
        <Grid item xs={8}>
          <Box
            sx={{
              border: "3px solid #111",
              height: "265px",
              boxSizing: "border-box",
              p: "32px 24px",
            }}
          >
            <ExperienceInfo />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
export default ExperienceIndicator;
