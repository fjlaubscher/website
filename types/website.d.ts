declare namespace Website {
  interface Image {
    jpg: string;
    webp: string;
  }

  interface WorkProject {
    name: string;
    description: string;
    tech: string[];
  }

  interface WorkHistory {
    from: string;
    to: string;
    employer: string;
    location: string;
    role: string;
    blurb: string;
    projects: WorkProject[];
  }

  interface ContactForm {
    name: string;
    email: string;
    query: string;
  }
}
