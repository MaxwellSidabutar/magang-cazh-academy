import "../styles/Machine.css";

function Machine() {
  return (
    <div>
      <div className="machine_container">
        <div className="machine-list">
          <div className="kartu-machine">
            <img src="images/cd 102 heilderberg2.jpg" />
            <p>Heidelberg speedmaster cd 102 v+l</p>
          </div>
          <div className="kartu-machine">
            <img src="images/120_V_5_colors_upscaled.jpeg" />
            <p>Heidelberg 120 V - 5 Colors</p>
          </div>
          <div className="kartu-machine">
            <img src="images/stahlfolding_upscaled.jpeg" />
            <p>Stahlfolding Machine</p>
          </div>
          <div className="kartu-machine">
            <img src="images/polar_cuting_upscaled.jpeg" />
            <p>Pollar Cuting Machine</p>
          </div>
        </div>
      </div>
      <div className="machine-list-text">
        <h3>List Our Machine</h3>
        <ul>
          <li>Heidelberg Speed Master CD 102 V+L</li>
          <li>Heidelberg Speed Master 102 V - 5 Colors</li>
          <li>Heilderberg GTOV</li>
          <li>Heildelberg GTOZ</li>
          <li>Heidelberg SORSZ</li>
          <li>Muller Martini Pony Perfect Binder</li>
          <li>Stahl Folding Machines</li>
          <li>Iberica Die-Cutting Machine 104</li>
          <li>Tsair Shuenn Folding Gluer</li>
          <li>Polar Cuttung Machine</li>
        </ul>
      </div>
    </div>
  );
}

export default Machine;
