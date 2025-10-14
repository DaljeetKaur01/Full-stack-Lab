import { useState } from "react";
import leadershipJson from "../../data/leadership.json";
import "./organization.css";


export function Organization() {
  const roles = Object.entries(leadershipJson.leadership).map(([key, info]: any) => ({
    role: key.replace(/_/g, " "),
    name: info.name,
    description: info.description,
  }));

  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div>
      <h2>Organization Leadership</h2>
      {roles.map((role, i) => (
        <div key={i}>
          <div
            style={{ cursor: "pointer", fontWeight: "bold" }}
            onClick={() => setExpanded(expanded === i ? null : i)}
          >
            {role.role}
          </div>

          {expanded === i && (
            <div>
              <div>{role.name}</div>
              <div>{role.description}</div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
