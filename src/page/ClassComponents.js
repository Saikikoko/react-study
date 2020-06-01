import React, { PureComponent } from "react";
import HomePage from "./HomePage";
import { ThemeProvider } from "../context";
import UserPage from "./UserPage";

class ClassComponents extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      theme: {
				themeColor: "red"
			},
    };
  }

  render() {
    const { theme } = this.state;
    return (
      <div>
        <h3>context</h3>
        <ThemeProvider value={theme}>
          <HomePage/>
					<UserPage/>
        </ThemeProvider>
      </div>
    );
  }
}

export default ClassComponents;
