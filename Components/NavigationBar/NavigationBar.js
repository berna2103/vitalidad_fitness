import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import { createClient } from "contentful";
import styles from "./navigation.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";

// Create a Contentful client instance
const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_TOKEN,
});

function NavigationBar() {

  const [workoutCategories, setWorkoutCategories] = useState([]);

  useEffect(() => {
    client
      .getEntries({
        content_type: "workoutCategory",
      })
      .then((response) => {
        setWorkoutCategories(response.items);
      })
      .catch(console.error);
  }, []);

  
  return (
    <Navbar
      variant="dark"
      expand="lg"
      className="bgdark shadow-lg text-uppercase"
    >
      <Container>
        <Navbar.Brand className="text-white" href="/">
          <Image src="/logo2.png" height={39} width={150} alt="VF" />{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Container>
          <Navbar.Collapse id="navbarScroll">
            <Nav className={`ms-auto mr-2 my-lg-0`} navbarScroll>
              <Nav.Link
                key = "1"
                eventKey="1"
                className={`rounded-3 mx-2 my-auto ${styles.navitem}`}
                href="/coaching"
              >
                Coaching
              </Nav.Link>
              <Nav.Link
                key = '2'
                eventKey="2"
                className={`rounded-3 mx-2 my-auto ${styles.navitem}`}
                href="/articulos"
              >
                Articulos
              </Nav.Link>

              <NavDropdown
                key = '3'
                title="Workouts"
                className={`${styles.dropdown} mx-2`}
                to={"/workouts"}
                id={styles.dropdown}
              > 
                {!workoutCategories ? (
                  <>
                    {" "}
                    <Nav.Link
                      key = '4'
                      eventKey="4"
                      className={`rounded-3 mx-2 my-auto ${styles.navitem}`}
                      href="/workouts"
                    >
                      Workouts
                    </Nav.Link>
                  </>
                ) : (
                  workoutCategories.map((category, index) => {
                    return (
                      <NavDropdown.Item
                        key = {index+100}
                        eventKey={index + 100}
                        className={`${styles.dropdownitem}`}
                        href={`/workouts/${category.sys.id}`}
                      >
                        {category.fields.title} 
                      </NavDropdown.Item>
                    );
                  })
                )} 
              </NavDropdown>

              <Nav.Link
                eventKey="5"
                className={`rounded-3 mx-2 my-auto ${styles.navitem}`}
                href="/dietas"
              >
                Dietas
              </Nav.Link>

              <NavDropdown
                title="Tools"
                className={`${styles.dropdown} mx-2`}
                id={styles.dropdown}
              >
                <NavDropdown.Item
                  eventKey="6"
                  className={`${styles.dropdownitem}`}
                  href="/calculadoras/macroscalculator"
                >
                  Calcula tus macros
                </NavDropdown.Item>
                <NavDropdown.Item
                  eventKey="7"
                  className={`${styles.dropdownitem}`}
                  href="/calculadoras/nutrientes"
                >
                  Nutrientes
                </NavDropdown.Item>
                <NavDropdown.Item
                  eventKey="10"
                  className={`${styles.dropdownitem}`}
                  href="/calculadoras/IMC"
                >
                  IMC (BMI)
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link
                eventKey="8"
                className={`rounded-3 mx-2 my-auto ${styles.navitem}`}
                href="/tienda"
              >
                Tienda
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
