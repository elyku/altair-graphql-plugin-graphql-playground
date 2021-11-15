class GraphQLPlayground {
  initialize(ctx) {
    ctx.theme.add("playground", {
      colors: {
        primary: "#075fb3",
        secondary: "#FFAAFF",
        bg: "#0F202D",
        offBg: "#172B3A",
        font: "#DADADA",
        offFont: "#EAEAEA",
        border: "#D8D8D8",
        offBorder: "#DADADA",
        headerBg: "#0F202D",
      },
      shadow: {
        color: "#434C5E",
        opacity: 0.1,
      },
      editor: {
        colors: {
          comment: "#5E6E7A",
          string: "#C53688",
          number: "#2471D6",
          variable: "#2AB773",
          keyword: "#2471D6",
          atom: "#CAC11E",
          attribute: "#D0655B",
          property: "#2AB773",
          punctuation: "#798791",
          definition: "#34E2EA",
          builtin: "#CAC11E",
          cursor: "#798791",
        },
      },
    });
  }

  async destroy() {}
}

window.AltairGraphQL.plugins.GraphQLPlayground = GraphQLPlayground;
