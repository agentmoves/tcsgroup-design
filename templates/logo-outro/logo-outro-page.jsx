// Mounts the logo outro on the composition stage. The stage owns the exportable-video
// contract, the seek listener, and the timeline — never add those attributes elsewhere.

const { CompositionStage } = window;

function LogoOutroPage() {
  return (
    <CompositionStage
      width={1920}
      height={1080}
      bg="#1A2A47"
      scenes={window.OM_SCENES}
      playback={window.OM_PLAYBACK}
    >
      <window.LogoOutro />
    </CompositionStage>
  );
}

window.LogoOutroPage = LogoOutroPage;
