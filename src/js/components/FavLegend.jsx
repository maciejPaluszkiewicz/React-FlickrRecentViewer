import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

const FavLegend = props => {
  return (
    <Typography component="div">
      <div className="favLegendBox">
        <Box
          className="imageTitle"
          fontFamily="Arial"
          fontSize={32}
          m={1}
          style={{ display: "block", weight: "bold" }}
        >
          {props.title}
        </Box>
        <Box
          className="imageOwner"
          fontFamily="Arial"
          fontSize={16}
          m={2}
          style={{ display: "block" }}
        >
          Owner: <span style={{ fontWeight: "bold" }}>{props.owner}</span>
        </Box>
        <Box
          className="imageDate"
          fontFamily="Arial"
          fontSize={16}
          m={3}
          style={{ display: "block" }}
        >
          Date: <span style={{ fontWeight: "bold" }}>{props.date} </span>
        </Box>
        <Box
          className="stats"
          fontFamily="Arial"
          fontSize={16}
          m={4}
          style={{ display: "block" }}
        >
          <span>
            Views:{" "}
            <Box
              style={{ fontSize: 16, display: "inline", fontWeight: "bold" }}
            >
              {props.views}
            </Box>{" "}
          </span>
          {/* <span>
            Favorites:{" "}
            <Box style={{ fontSize: 16, display: "inline" }}>
              {props.stats.favorites}{" "}
            </Box>
          </span>
          <span>
            Comments:{" "}
            <Box style={{ fontSize: 16, display: "inline" }}>
              {props.stats.comments}{" "}
            </Box>
          </span> */}
        </Box>
      </div>
    </Typography>
  );
};

export default FavLegend;
