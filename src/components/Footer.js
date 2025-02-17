import { ContainerWithChildren } from "postcss/lib/container";

function Footer() {
  const aboutDetails = [
    "About SIE",
    "Careers",
    "PlayStation Studios",
    "PlayStation",
    "Productions",
  ];
  const productDetails = ["PS5", "PS4", "PSVR2", "Accessor", "ies"];
  const valueDetails = [
    "Enviroment",
    "Accessibility",
    "Online Safety",
    "Diversity &",
    "Inclusion",
  ];
  const supportDetails = [
    "Support hub",
    "PlayStation Safety",
    "PSN Status",
    "PlayStation",
    "Repairs",
  ];
  const resourceDetails = [
    "PSN terms of service",
    "PS Store cancellation",
    "Policy",
    "Age ratings",
    "Health warning",
  ];
  const connectImgDetails = [
    "/assets/Facebook Circled.png",
    "/assets/Instagram Circle.png",
    "/assets/X.png",
    "/assets/YouTube Logo.png",
  ];
  const connectDetails = ["iOS app", "Android", "APP"];
  return (
    <section className="bg-sectionbgColor2 flex gap-3 p-10 flex-col">
      <div className="flex gap-1 items-center">
        <img src="/assets/Image 15.png" className="w-10 h-auto"></img>
        <h1 className="font-bold text-2xl" style={{ fontFamily: "Bayon" }}>
          PLAYSTATION
        </h1>
      </div>
      <div className="flex w-full">
        <hr className="h-0.5 w-full border-white"></hr>
      </div>
      <div className="products flex flex-row justify-between">
        <div className="flex flex-col">
          <h1 className="mb-5  font-medium">About</h1>
          {aboutDetails.map((item) => {
            return <li className="list-none text-xs">{item}</li>;
          })}
        </div>
        <div className="flex flex-col">
          <h1 className="mb-5  font-medium">Products</h1>
          {productDetails.map((item) => {
            return <li className="list-none text-xs">{item}</li>;
          })}
        </div>
        <div className="flex flex-col">
          <h1 className="mb-5  font-medium">Values</h1>
          {valueDetails.map((item) => {
            return <li className="list-none text-xs">{item}</li>;
          })}
        </div>
        <div className="flex flex-col">
          <h1 className="mb-5  font-medium">Support</h1>
          {supportDetails.map((item) => {
            return <li className="list-none text-xs">{item}</li>;
          })}
        </div>
        <div className="flex flex-col">
          <h1 className="mb-5  font-medium">Resources</h1>
          {resourceDetails.map((item) => {
            return <li className="list-none text-xs">{item}</li>;
          })}
        </div>
        <div className="flex flex-col">
          <h1 className="mb-5  font-medium">Connect</h1>
          <div className="flex gap-0.5">
            {connectImgDetails.map((item) => {
              return <img src={item} className="w-4 h-4"></img>;
            })}
          </div>

          {connectDetails.map((item) => {
            return <li className="list-none text-xs">{item}</li>;
          })}
        </div>
      </div>
      <div className="flex w-full my-3">
        <hr className="h-0.5 w-full border-white"></hr>
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="font-bold text-lg" style={{ fontFamily: "Bayon" }}>
          SONY INTERACTIVE ENTERTAINMENT
        </h1>
        <p className="text-sm">
          © 2025 Sony Interactive Entertaiment Europe Limited (SIEE)
        </p>
        <p className="text-sm">
          All Content, game titles, trade names and/or trade dress, trademarks,
          artwork and associated imagery are trademarks copyright material of
          their respective owner. All rights reserved.
        </p>
        <hr className="h-0.5 w-full border-white mt-4"></hr>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-0.5 items-center">
          <img src="/assets/Geography.png" className="w-4 h-4"></img>
          <p className="text-xs">India</p>
        </div>
        <div className="text-xs">
          Legal | Privacy Policy | website Terms of use | SiteMap | Cookies
          Policy | Software Usasge Terms
        </div>
      </div>
    </section>
  );
}

export default Footer;
