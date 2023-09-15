import { Icon } from "@iconify/react";
import styled from "styled-components";
import { TagLink } from "../Tag";

const icons = [
  { name: "cib:typescript", text: "TypeScript" },
  { name: "akar-icons:javascript-fill", text: "JavaScript" },
  { name: "akar-icons:react-fill", text: "ReactJS" },
  { name: "akar-icons:graphql-fill", text: "GraphQL" },
  { name: "akar-icons:redux-fill", text: "Redux" },
  { name: "teenyicons:nextjs-outline", text: "NextJS" },
  { name: "bxl:nodejs", text: "NodeJS" },
  { name: "cib:docker", text: "Docker" },
  { name: "bxl:tailwind-css", text: "Tailwind" },
];

export const TechIconList = () => {
  return (
    <List>
      {icons.map((icon, index) => {
        return (
          <IconContainer key={index}>
            <TagLink link={`/tags/${icon.text.toLowerCase()}`}>
              <Icon icon={icon.name} className="icon" />
            </TagLink>
            <Tooltip>{icon.text}</Tooltip>
          </IconContainer>
        );
      })}
    </List>
  );
};

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Tooltip = styled.p`
  color: ${({ theme }) => `${theme.colors.hiContrastText}`};
  margin-top: 10px;
`;

const List = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 30px;

  .icon {
    position: relative;
    cursor: pointer;
    display: block;
    width: 4rem;
    height: 4rem;
    padding: 0.4rem;
    text-align: center;
    color: ${({ theme }) => `${theme.colors.hiContrastText}`};
    border-radius: 8px;
    transition: 0.5s;
    transition-property: text-shadow, color, box-shadow;

    @media (max-width: 1024px) {
      height: 3rem;
      width: 3rem;
    }
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
