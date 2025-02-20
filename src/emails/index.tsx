import {
  Body,
  Button,
  Container,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface EmailProps {
  from: string;
  message: string;
  subject: string;
}

export const Email = ({ from, message, subject }: EmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>{message}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section>
            <Text style={text}>{subject}</Text>
            <Text style={text}>{from}</Text>
            <Text style={text}>Hi Fazli,</Text>
            <Text style={text}>{message}</Text>
            <Text style={text}>Honeyberry.me</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default Email;

const main = {
  backgroundColor: "#f6f9fc",
  padding: "10px 0",
};

const container = {
  backgroundColor: "#ffffff",
  border: "1px solid #f0f0f0",
  padding: "45px",
};

const text = {
  fontSize: "16px",
  fontFamily:
    "'Open Sans', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
  fontWeight: "300",
  color: "#404040",
  lineHeight: "26px",
};

const button = {
  backgroundColor: "#007ee6",
  borderRadius: "4px",
  color: "#fff",
  fontFamily: "'Open Sans', 'Helvetica Neue', Arial",
  fontSize: "15px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  width: "210px",
  padding: "14px 7px",
};

const anchor = {
  textDecoration: "underline",
};
