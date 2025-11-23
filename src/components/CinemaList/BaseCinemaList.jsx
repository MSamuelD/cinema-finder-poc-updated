import { List, Divider } from "@mui/material";
import CinemaListItem from "./CinemaListItem";

const CinemaListAside = ({ cinemas, Header = null }) => {
  return (
    <div>
      {/*Enclosed header inside a new container instead of the list */}
      <Header style={{}} {...{ cinemas }} />
      <List sx={{ maxHeight: "calc(100vh - 112px)", overflowY: "scroll" }}>
        {Header && <Divider />}
        {/* NOTE: potential future feature of adding frontend sorting */}
        {/* NOTE: this currently doesn't handle the case of cinemas array being empty
                  (poential caused by manually manipulated url arguments) */}
        {cinemas.map((cinema, idx) => (
          <CinemaListItem {...cinema} key={idx} />
        ))}
      </List>
    </div>
  );
};
export default CinemaListAside;
