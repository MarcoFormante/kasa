export function MenuMobile({menuIsOpen,onClick}) {
  return (
    <button
      className={`menu-container ${menuIsOpen ? "active" : ""}`}
      aria-label={
        menuIsOpen
          ? "Ouvrir le menu de navigation"
          : "Fermer le menu de navigation"
      }
      onClick={onClick}
    >
      <div>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </button>
  );
}
