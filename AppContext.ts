import React from "react";

const context = {
  essayId: null,
  setEssayId: (id: string) => {},
}

export const AppContext = React.createContext(context);
