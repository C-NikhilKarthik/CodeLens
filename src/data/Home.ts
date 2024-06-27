export type content = {
  heading: string;
  subHeading: string;
};

export type working = {
  heading: string;
  subHeading: string;
};

export const Content: content[] = [
  {
    heading: "Automated README Generation",
    subHeading:
      "Creates detailed README files with project description, installation instructions, usage guidelines, and contribution steps.",
  },
  {
    heading: "Setup Instructions",
    subHeading:
      "Generates setup files and scripts that guide users through the installation and configuration process.",
  },
  {
    heading: "Code Analysis",
    subHeading:
      "Analyzes the codebase to identify dependencies, configuration requirements, and other critical information.",
  },
  {
    heading: "Customizable Templates",
    subHeading:
      "Allows users to customize templates for README and setup files to match their preferred format and style.",
  },
  {
    heading: "Continuous Updates",
    subHeading:
      "Keeps the documentation updated by re-analyzing the repository periodically or upon changes.",
  },
];

export const Working: working[] = [
  {
    heading: "Scan the Repository",
    subHeading:
      "The tool scans the provided repository, analyzing the code structure, dependencies, and configuration files.",
  },
  {
    heading: "Generate Documentation",
    subHeading:
      "It then uses this information to generate a comprehensive README and setup files, ensuring that all necessary information is included.",
  },
  {
    heading: "Customization",
    subHeading:
      "Users can customize the generated documentation to match their preferred style.",
  },
  {
    heading: "Updates",
    subHeading:
      "The tool keeps the documentation updated by periodically re-scanning the repository.",
  },
];
