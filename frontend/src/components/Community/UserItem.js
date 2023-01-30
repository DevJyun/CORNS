import React from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function UserItem({ item }) {
  const { img_url, nickname, user_id, level } = item;

  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell>
        <img
          src={img_url}
          alt={nickname}
          css={css`
            border-radius: 200px;
            width: 40px;
            height: 40px;
          `}
        />
      </TableCell>
      <TableCell>
        {nickname}#{user_id}
      </TableCell>
      <TableCell>Lv.{level}</TableCell>
    </TableRow>
  );
}

export default UserItem;
