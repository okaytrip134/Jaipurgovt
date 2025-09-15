import React, { useState } from "react";
import { X, ChevronDown, List } from "lucide-react";
import "./nav.css";
import Topbar from "./topbar";

// Mobile-only nav. Drop this right under <Topbar /> and before the desktop <nav> in your page
// or mount it anywhere you like. The desktop navbar can stay as-is.
// Usage example:
//   <MobileNavbar />
//
// Notes
// - Uses the same class hooks (navbar-bg, dropdown-menu) if you want to keep styling consistent.
// - Accessible: ESC to close, focus-trap-ish first pass, aria attributes.

export default function MobileNavbar() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState({});

  const toggle = () => setOpen(v => !v);
  const close = () => setOpen(false);

  const toggleSection = key =>
    setExpanded(prev => ({ ...prev, [key]: !prev[key] }));

  // Prevent body scroll when drawer is open
  React.useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="block md:hidden">
        <Topbar/>
      {/* Trigger button (you can remove if you already have one) */}
      <div className="w-full border-b navbar-bg sticky top-0 z-30 flex items-center justify-between px-4 py-3">
        <a href="/" className="flex items-center">
          <img
            src="/cm/Emblem_of_India.svg.webp"
            alt="Gov. of Jaipur"
            className="h-12"
          />
        </a>
        <button
          className="p-2"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={toggle}
        >
          <List size={24} />
        </button>
      </div>

      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/40"
          onClick={close}
          aria-hidden
        />
      )}

      {/* Drawer */}
      <aside
        role="dialog"
        aria-modal="true"
        className={`fixed inset-y-0 left-0 z-50 w-[88%] max-w-sm bg-white shadow-xl transform transition-transform duration-200 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <a href="/" className="flex items-center gap-2">
            <img
              src="/cm/Emblem_of_India.svg.webp"
              alt="Gov. of Jaipur"
              className="h-10"
            />
            <span className="font-semibold">District Portal</span>
          </a>
          <button className="p-2" aria-label="Close menu" onClick={close}>
            <X size={22} />
          </button>
        </div>

        {/* Simple link at top (example of a single link) */}
        <nav className="px-2 py-2">
          <a
            href="/home/dptHome/37"
            className="block px-3 py-3 rounded hover:bg-gray-100 font-medium"
            onClick={close}
          >
            Home
          </a>

          {/* Dropdown groups */}
          <Dropdown
            label="About Us"
            open={!!expanded.about}
            onToggle={() => toggleSection("about")}
            items={[
              { label: "Local Produce", href: "/" },
              { label: "Culinary Delights", href: "/" },
              {
                label: "Administrative Hierarchy",
                nested: [
                  // add children here if needed
                ],
              },
              { label: "Organization Chart", href: "/" },
              { label: "About District", href: "/" },
              { label: "Location & Area", href: "/" },
              { label: "Geographical & Physical Features", href: "/" },
              { label: "History", href: "/" },
            ]}
            onItemClick={close}
          />

          <Dropdown
            label="Contact Us"
            open={!!expanded.contact}
            onToggle={() => toggleSection("contact")}
            items={[
              { label: "District Administration", href: "/" },
              { label: "District Level Officers", href: "/" },
              { label: "Block Level Officers", href: "/" },
              { label: "Janaadhar Helpdesk", href: "/" },
              { label: "Helpline", href: "/" },
              { label: "District War Room", href: "/" },
              { label: "Right To Information", href: "/" },
            ]}
            onItemClick={close}
          />

          <Dropdown
            label="Business"
            open={!!expanded.business}
            onToggle={() => toggleSection("business")}
            items={[
              { label: "Business Opportunity", href: "/" },
              { label: "Economy", href: "/" },
              { label: "Infrastructure", href: "/" },
              { label: "Special Economic Zones", href: "/" },
              { label: "Supporting Institutions", href: "/" },
              { label: "Tenders", href: "/" },
            ]}
            onItemClick={close}
          />

          <Dropdown
            label="Media Gallery"
            open={!!expanded.media}
            onToggle={() => toggleSection("media")}
            items={[
              { label: "Zila Darshan Pustika", href: "/" },
              { label: "Poster", href: "/" },
              { label: "Video-Awareness Material", href: "/" },
              { label: "Audio Jingles", href: "/" },
              { label: "Advertisement", href: "/" },
              { label: "District Photo Gallery", href: "/" },
              { label: "Awards", href: "/" },
            ]}
            onItemClick={close}
          />

          <Dropdown
            label="Documents"
            open={!!expanded.documents}
            onToggle={() => toggleSection("documents")}
            items={[
              { label: "Expenditure Statement", href: "/" },
              { label: "Documents (All)", href: "/" },
              { label: "Election Orders & Training", href: "/" },
              { label: "RTI Related", href: "/" },
              { label: "Recruitment Related", href: "/" },
              { label: "Orders", href: "/" },
              { label: "Circular", href: "/" },
              { label: "Act & Rules", href: "/" },
              { label: "Annual Progress Report", href: "/" },
              { label: "Notification", href: "/" },
              { label: "Policy", href: "/" },
              { label: "Guidelines", href: "/" },
              { label: "Employees Related", href: "/" },
              { label: "Reports", href: "/" },
              { label: "Covid-19 Orders", href: "/" },
              { label: "Roster Register", href: "/" },
            ]}
            onItemClick={close}
          />

          <Dropdown
            label="Citizen Corner"
            open={!!expanded.citizen}
            onToggle={() => toggleSection("citizen")}
            items={[
              { label: "E-Pledge", href: "/" },
              { label: "NFSA Application Form", href: "/" },
              { label: "Download Admit Cards", href: "/" },
              { label: "Election Department", href: "/" },
              { label: "Smart City", href: "/" },
              { label: "Farmer Registry Camp", href: "/" },
              { label: "Download Forms", href: "/" },
              { label: "Services", href: "/" },
              { label: "Important Websites / Portals", href: "/" },
            ]}
            onItemClick={close}
          />

          {/* CM Profile */}
          <div className="mt-2 mb-10 px-3">
            <div className="flex items-center gap-3 p-3 rounded-lg border bg-gray-50">
              <img
                src="https://jankalyanfile.rajasthan.gov.in//Content/UploadFolder/CMProfile/2024/Jun/1_CM_4a8f94bc-1773-48b0-9d53-734d79cbc223.jpeg"
                alt="Shri BhajanLal Sharma"
                className="h-12 w-12 rounded-full object-cover"
              />
              <div>
                <p className="m-0 font-medium text-sm">Shri BhajanLal Sharma</p>
                <small className="text-gray-800">Hon'ble Chief Minister</small>
              </div>
            </div>
          </div>
        </nav>
      </aside>
    </div>
  );
}

function Dropdown({ label, items = [], open, onToggle, onItemClick }) {
  return (
    <div className="border-b last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-3 py-3 font-medium hover:bg-gray-100"
        aria-expanded={open}
        aria-controls={`section-${label}`}
      >
        <span>{label}</span>
        <ChevronDown
          size={18}
          className={`transition-transform ${open ? "rotate-180" : "rotate-0"}`}
        />
      </button>
      <div
        id={`section-${label}`}
        className={`grid overflow-hidden transition-[grid-template-rows] duration-200 ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <ul className="min-h-0">
          {items.map((item, idx) => (
            <li key={idx} className="">
              {item.nested ? (
                <div className="px-3 py-2 text-sm text-gray-600">{item.label}</div>
              ) : (
                <a
                  href={item.href}
                  className="block pl-6 pr-3 py-2 hover:bg-gray-100 text-sm"
                  onClick={onItemClick}
                >
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
