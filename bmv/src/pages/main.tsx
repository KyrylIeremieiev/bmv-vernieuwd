import { useState, useEffect } from 'react';
import Welcome from '../comps/welcome';
import Intro from '../comps/intro';
import Projects from '../comps/projects';
import Org from '../comps/org';
function Main() {
  const [menuOpen, setMenu] = useState(false);
  return (
    <>

    <Welcome></Welcome>
    <Intro></Intro>
    <Projects></Projects>
    <Org></Org>

    </>
  );
}

export default Main;
