"use client";

import React from "react";
import { InfinitySpin } from "react-loader-spinner";
type Props = {};

const loading = (props: Props) => {
  return (
    <div className="flex h-[600px] w-full items-center justify-center">
      <InfinitySpin width="200" color="#3b82f6" />
    </div>
  );
};

export default loading;
