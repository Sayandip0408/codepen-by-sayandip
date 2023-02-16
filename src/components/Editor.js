import React, { useState } from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import { Controlled as ControlledEditor } from 'react-codemirror2'
import { AiOutlineShrink, AiOutlineExpandAlt } from "react-icons/ai";

export default function Editor(props) {
  const {
    language,
    displayName,
    value,
    onChange
  } = props
  const [open, setOpen] = useState(true)

  function handleChange(editor, data, value) {
    onChange(value)
  }

  return (
    <div className={`editor-container ${open ? '' : 'collapsed'}`}>
      <div className="editor-title" style={{ color: displayName === "HTML" ? "#e67e22" : displayName === "CSS" ? "#0652DD" : "#f1c40f" }}>
        {displayName}
        <button
          type="button"
          className="expand-collapse-btn"
          style={{ color: displayName === "HTML" ? "#e67e22" : displayName === "CSS" ? "#0652DD" : "#f1c40f" }}
          onClick={() => setOpen(prevOpen => !prevOpen)}
        >
          {open ? <AiOutlineShrink /> : <AiOutlineExpandAlt />}
        </button>
      </div>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className="code-mirror-wrapper"
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          theme: 'material',
          lineNumbers: true
        }}
      />
    </div>
  )
}
