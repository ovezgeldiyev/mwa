import React from "react";
import Tab from "./Tab";
import Chat from "./Chat";
import Faq from "./Faq";

export default function Side() {
  return (
    <div className="introSide">
      <Tab />
      <Chat />
      <Faq />
      <p>
        @ 2024 METAWAVE STUDIO Limited. All rights reserved. This website is the
        property of METAWAVE STUDIO and is protected by copyright law. No part
        of this website may be reproduced, distributed, or transmitted in any
        form or by any means without the prior written permission of METAWAVE
        STUDIO.
      </p>
    </div>
  );
}
