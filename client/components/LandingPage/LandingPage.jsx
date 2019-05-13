import React from "react";
import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";







const dashboardRoutes = [];

class LandingPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          color="transparent"
          routes={dashboardRoutes}
          brand="DAYCARE 2.0"
          // rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
          {...rest}
        />
        <Parallax filter image={require("assets/img/landing-bg.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}>DAYCARE 2.0</h1>
                <h4>
                  We can pust some random crap in here talking about the page.
                </h4>
                <br />
                <Button
                  color="danger"
                  size="lg"
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-play" />
                  Read More Here
                </Button>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
           
          </div>
        </div>
     
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(LandingPage);
