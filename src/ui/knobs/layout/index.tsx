import React from "react";
import RowPropertyPanel from "../../primitives/row-property-panel";
import { Flex } from "rebass";
import ButtonGroup from "../../primitives/button-group";
import { EyeOff } from "react-feather";
import Block from "./icons/block";
import InlineBlock from "./icons/inline-block";
import Inline from "./icons/inline";
import FlexIcon from "./icons/flex";
import FlexPanel from "./flex";
import { State, UpdateProp } from "../../App";

interface Props {
  state: State;
  updateProp: UpdateProp;
}

const Properties = {
  Display: "display"
};

export default function Layout({ state, updateProp }: Props) {
  return (
    <Flex flexDirection="column">
      <RowPropertyPanel label="Display">
        <ButtonGroup
          options={[
            {
              icon: <EyeOff size="11px" />,
              tooltip: "Display none",
              value: "none"
            },
            {
              icon: <Block isActive={false} />,
              tooltip: "Block",
              value: "block"
            },
            {
              icon: <InlineBlock isActive={false} />,
              tooltip: "Inline block",
              value: "inline-block"
            },
            {
              icon: <Inline isActive={false} />,
              tooltip: "Inline",
              value: "inline"
            },
            {
              icon: <FlexIcon isActive={false} />,
              tooltip: "Flex",
              value: "flex"
            }
          ]}
          value={state[Properties.Display]}
          onChange={value => {
            updateProp(Properties.Display, value);
          }}
        />
      </RowPropertyPanel>
      {state[Properties.Display] === "flex" && (
        <FlexPanel state={state} updateProp={updateProp} />
      )}
    </Flex>
  );
}
