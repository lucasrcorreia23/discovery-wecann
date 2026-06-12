import React from "react";

/* Mockup de papel/PDF A4 do receituário (doc 07) */
export function DocPaper({
  stripColor,
  title,
  subtitle,
  rows,
  meds,
  icp,
}: {
  stripColor: string;
  title: string;
  subtitle: string;
  rows: { label: string; value: React.ReactNode }[];
  meds?: React.ReactNode;
  icp?: string;
}) {
  return (
    <div className="doc-paper">
      <div className="doc-strip" style={{ background: stripColor }} />
      <h5>{title}</h5>
      <div style={{ fontSize: 10, color: "#8a8578", marginBottom: 14 }}>
        {subtitle}
      </div>
      {rows.map((r, i) => (
        <div className="doc-row" key={i}>
          <span className="doc-label">{r.label}</span>
          <span style={{ textAlign: "right", fontWeight: 600 }}>{r.value}</span>
        </div>
      ))}
      {meds && <div className="doc-meds">{meds}</div>}
      {icp && (
        <div className="doc-icp">
          <span
            style={{
              display: "inline-block",
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: stripColor,
            }}
          />
          {icp}
        </div>
      )}
    </div>
  );
}

/* Mockup de celular (app WeCann Care) */
export function PhoneFrame({
  top,
  children,
}: {
  top: string;
  children: React.ReactNode;
}) {
  return (
    <div className="phone-frame">
      <div className="phone-notch" />
      <div className="phone-screen">
        <div className="ph-top">{top}</div>
        {children}
      </div>
    </div>
  );
}
