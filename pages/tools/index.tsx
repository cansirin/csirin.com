import { CenteredContainer } from "../../ui-library/layout-components";
import styled from "styled-components";
import { Icon } from "@iconify/react";

const tools = [
  {
    name: "ic:outline-laptop-mac",
    description: '15" Macbook Pro (Mid 2014)',
  },
  { name: "ic:baseline-monitor", description: '28" Samsung LU28E590DS' },
  { name: "cil:mouse", description: "Razer Naga Trinity" },
  {
    name: "bi:keyboard",
    description: "Custom made with DSA profile keycaps",
  },
  {
    name: "fa6-solid:headphones",
    description: "Apple Airpods Pro / Bose QC 35",
  },
  { name: "bi:speaker", description: "Bose Companion 2 Series III" },
  {
    name: "cib:webstorm",
    description: "Webstorm IDE with Moonlight (Material)",
  },
  { name: "bi:terminal", description: "iTerm / zsh" },
];

const ToolsPage = () => {
  return (
    <CenteredContainer>
      <div>
        <h1>Tools I am using while developing my projects</h1>
      </div>
      <List>
        {tools.map((tool, index) => {
          return (
            <ToolContainer key={index} style={{ display: "flex", gap: 10 }}>
              <Icon icon={tool.name} className="icon" />
              <p>{tool.description}</p>
            </ToolContainer>
          );
        })}
      </List>
    </CenteredContainer>
  );
};

export default ToolsPage;

const ToolContainer = styled.div`
  display: flex;
  align-items: center;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  .icon {
    position: relative;
    display: block;
    width: 4rem;
    height: 4rem;
    padding: 0.4rem;
    text-align: center;
    color: ${({ theme }) => `${theme.colors.hiContrastText}`};
    border-radius: 8px;
    transition: 0.5s;
  }

  .icon::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: ${({ theme }) => `${theme.colors.amber10}`};
    transition: 0.2s;
    transform: scale(0.9);
    z-index: -1;
  }

  .icon:hover::before {
    transform: scale(1.1);
    box-shadow: 0 0 15px ${({ theme }) => `${theme.colors.hoveredBorder}`};
  }

  .icon:hover {
    color: ${({ theme }) => `${theme.colors.brand}`};
    box-shadow: 0 0 5px ${({ theme }) => `${theme.colors.lowContrastText}`};
    text-shadow: 0 0 5px ${({ theme }) => `${theme.colors.lowContrastText}`};
  }
`;
