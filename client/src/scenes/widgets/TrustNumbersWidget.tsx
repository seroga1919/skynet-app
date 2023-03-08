/** @format */

import { Box, Divider, IconButton, Typography, useTheme } from "@mui/material";
import FlexBetween from "@/components/FlexBetween";
import WidgetWrapper from "@/components/WidgetWrapper";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPost } from "@/state";

const TrustNumbersWidget = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);

  const { palette } = useTheme();
  const main = palette.neutral.main;
  const primary = palette.primary.main;

  return <WidgetWrapper>TrustNumbersWidget</WidgetWrapper>;
};

export default TrustNumbersWidget;
