// map your figure-keys to file paths
const figurePaths = {
  fig1: "figures/meta_plot_swapped_axes_top_acc.pdf",
  fig2: "figures/combined_accuracy_and_metroplot_full.pdf",
  fig3: "figures/Ranking_figure.pdf",
  fig4: "figures/total_model_recovery_accuracy_no_Ef.pdf",
  fig5: "figures/mds_full_features_small.pdf"
};

// grab elements (script is loaded *after* the DOM)
const selectEl = document.getElementById("figureSelect");
const btn      = document.getElementById("showBtn");
const embedEl  = document.getElementById("figureDisplay");
const texts    = document.querySelectorAll(".figure-text");

// the updater function
function updateFigure() {
  const key = selectEl.value;
  // swap the embed src
  embedEl.src = figurePaths[key] || "";
  // hide all descriptions
  texts.forEach(p => p.style.display = "none");
  // show the matching one
  const txt = document.getElementById(key + "-text");
  if (txt) txt.style.display = "block";
}

// set up event listeners
btn.addEventListener("click", updateFigure);
selectEl.addEventListener("change", updateFigure);

// initial load
updateFigure();
