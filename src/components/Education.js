import React from "react";
import {
  Section,
  Timeline,
  TimelineItem,
  Content,
  Date,
  Title,
  Description,
} from "./styles/Education.styles";

const Education = () => (
  <Section>
    <h1>Education</h1>
    <Timeline>
      <TimelineItem>
        <Content>
          <Date>2021-Present</Date>
          <Title>
            Motilal Nehru National Institute of Technology Allahabad, Prayagraj
          </Title>
          <Description>
            Bachelor of Technology in Computer Science and Engineering
          </Description>
          <Description>CPI: 7.21 (Till 6th sem)</Description>
        </Content>
      </TimelineItem>
      <TimelineItem>
        <Content>
          <Date>2021</Date>
          <Title>DAV Public School, Jharsuguda</Title>
          <Description>12th Class (CBSE), Odisha</Description>
          <Description>Percentage: 93%</Description>
        </Content>
      </TimelineItem>
      <TimelineItem>
        <Content>
          <Date>2019</Date>
          <Title>DAV Public School, Jharsuguda</Title>
          <Description>10th Class (CBSE), Odisha</Description>
          <Description>Percentage: 92.8%</Description>
        </Content>
      </TimelineItem>
    </Timeline>
  </Section>
);

export default Education;
