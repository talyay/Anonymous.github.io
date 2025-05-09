const figurePaths = {
  fig1: "figures/meta_plot_swapped_axes_top_acc.pdf",
  fig2: "figures/combined_accuracy_and_metroplot_full.pdf",
  fig3: "figures/Ranking_figure.pdf",
  fig4: "figures/total_model_recovery_accuracy_no_Ef.pdf",
  fig5: "figures/mds_full_features_small.pdf"
};

window.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("figureSelect");
  const embed = document.getElementById("figureDisplay");
  const fileName = document.getElementById("figureFileName");

  function updateFigure() {
    const key = select.value;
    const file = figurePaths[key];
    if (!file) return;

    embed.src = file;
    fileName.textContent = file.split("/").pop();

    document.querySelectorAll(".figure-text").forEach(el => {
      el.style.display = "none";
    });

    const textEl = document.getElementById(`${key}-text`);
    if (textEl) {
      textEl.style.display = "block";
    }
  }

  select.addEventListener("change", updateFigure);
  updateFigure();
});
