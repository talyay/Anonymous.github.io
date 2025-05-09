const figurePaths = {
  fig1: "figures/meta_plot_swapped_axes_top_acc.pdf",
  fig2: "figures/combined_accuracy_and_metroplot_full.pdf",
  fig3: "figures/Ranking_figure.pdf",
  fig4: "figures/total_model_recovery_accuracy_no_Ef.pdf",
  fig5: "figures/mds_full_features_small.pdf"
};

window.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("figureSelect");
  const btn = document.getElementById("showBtn");
  const embed = document.getElementById("figureDisplay");

  function updateFigure() {
    const key = select.value;
    embed.src = figurePaths[key] || "";

    // Hide all
    document.querySelectorAll(".figure-text")
            .forEach(el => el.style.display = "none");

    // Show matching
    const shown = document.getElementById(key + "-text");
    if (shown) shown.style.display = "block";
  }

  btn.addEventListener("click", updateFigure);
  select.addEventListener("change", updateFigure);

  updateFigure();
});
