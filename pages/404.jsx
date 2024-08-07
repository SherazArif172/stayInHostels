// import React from "react";
// import Image from "next/image";
// import not_found from "../../public/not_found/404_Illustration.png";
// const Not_found = () => {
//   return (
//     <div>
//       <div>
//         <p>404</p>
//         <p>This is not the page you are looking for!</p>
//         <p>
//           Tellus in metus vulputate eu scelerisque felis imperdiet proin. Sed
//           faucibus turpis in eu mi bibendum
//         </p>
//       </div>
//       <div>
//         <Image src={not_found} />
//       </div>
//     </div>
//   );
// };

// export default Not_found;

import React from "react";
import Link from "next/link";

export default function Custom404() {
  return (
    <div align="center">
      <h1>404 - Page Not Found</h1>
      <p>
        It seems we can't find what you're looking for. Perhaps searching can
        help.
      </p>
      <Link href="/">Go back home</Link>
    </div>
  );
}
