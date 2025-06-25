import React, { useEffect, useState } from "react";
import DropDownTab from "../DropDownTab/DropDownTab";
import { PrestationType } from "../../types/prestation.types";
import { PrestationService } from "../../services/PrestationService";

/* AccordionTab Component
* Render logic :
* Uses "useState" to store:
  -> "prestations", a list of prestation items.
  -> "openTabId", the ID of the currently opened tab (or null if none is open).
* Uses "useEffect" to load all prestations from "PrestationService.getAll()" when the component mounts.
  -> Saves the data in "prestations".
  -> Sets the first tab to be open by default if there is at least one prestation.

* Defines "handleToggle" to open or close a tab:
  -> If the clicked tab is already open, it closes it (sets to null).
  -> If it's not open, it sets it as the current "openTabId".

* View TSX :
* Returns a <div> that renders one "DropDownTab" for each prestation.
  -> Each tab receives its data, a boolean "isOpen" based on whether its ID matches "openTabId", and an "onToggle" function.
*/
const AccordionTab: React.FC = () => {
  const [prestations, setPrestations] = useState<PrestationType[]>([]);
  const [openTabId, setOpenTabId] = useState<number | null>(null);

  useEffect(() => {
    PrestationService.getAll().then((data) => {
      setPrestations(data);
      if (data.length > 0) {
        setOpenTabId(data[0].id); // Ouvre le premier par défaut
      }
    });
  }, []);

  const handleToggle = (id: number) => {
    setOpenTabId((prevId) => (prevId === id ? null : id)); // toggle
  };

  return (
    <div>
      {prestations.map((prestation) => (
        <DropDownTab
          key={prestation.id}
          prestation={prestation}
          isOpen={prestation.id === openTabId}
          onToggle={() => handleToggle(prestation.id)}
        />
      ))}
    </div>
  );
};

export default AccordionTab;