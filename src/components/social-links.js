import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";

const SocialLinks = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          social {
            twitter {
              title
              url
              username
            }
            github {
              title
              url
              username
            }
            instagram {
              title
              url
              username
            }
            email {
              title
              url
              username
            }
          }
        }
      }
    }
  `);
  const social_ids = data.site.siteMetadata?.social;
  const _social_ids = Object.keys(social_ids);
  const socialLinks = _social_ids.map((social_id, i) => {
    return (
      <SocialLinkItem key={i}>
        <a href={social_ids[social_id].url + social_ids[social_id].username}>{social_ids[social_id].title}</a>
      </SocialLinkItem>
    );
  });

  return <SocialLinkList>{socialLinks}</SocialLinkList>;
};

export default SocialLinks;

const SocialLinkList = styled.ul`
  padding: 0;
  list-style: none;
  display: flex;
`;

const SocialLinkItem = styled.li`
  margin-right: var(--size-400);
  text-transform: uppercase;

  & a {
    color: inherit;
    font-size: var(--size-300);
  }
`;
