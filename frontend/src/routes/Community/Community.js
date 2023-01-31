import { Route, Switch, Redirect } from "react-router-dom";
import Navbar from "../../components/GlobalComponents/Navbar";
import Sidebar from "../../components/GlobalComponents/Sidebar";
import Friends from "./Friends";
import Ranking from "./Ranking";
import SearchUser from "./SearchUser";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Community() {
  const SidebarItems = [
    { name: "알맹이랭킹", route: "/community/ranking/sincerity" },
    { name: "유저검색", route: "/community/searchUser" },
    { name: "친구", route: "/community/friends" },
  ];

  return (
    <div
      css={css`
        margin: 0 105px;
      `}
    > 
      <Navbar />

      <Grid container spacing={1} sx={{margin: '124px 0 0 0'}}>
        <Grid item xs={2}>
          <Sidebar Items={SidebarItems} />
        </Grid>
        <Grid item xs={10}>
          <div
            css={css`
              box-sizing: border-box;
              border: 3px solid #111111;
              padding: 0 32px;
            `}
          >
            <Switch>
              <Route path="/community/ranking" component={Ranking} />
              <Route
                exact
                path="/community/searchUser"
                component={SearchUser}
              />
              <Route exact path="/community/friends" component={Friends} />
              
              <Redirect to="/NotFound" />
            </Switch>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Community;