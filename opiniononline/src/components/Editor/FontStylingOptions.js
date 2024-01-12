import { Option, Select } from "@material-tailwind/react";
import { FaBold, FaItalic, FaPalette, FaUnderline } from "react-icons/fa"; // Update the path to your icons
import IconButton from "../IconButton";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function FontStylingOptions({
  label,
  values,
  onSelectChanges,
  onButtonClicks,
  onChangeColor,
  showButtons = true
}) {

  const classNameButtons = "bg-primary text-white";

  const [test, setTest] = useState("#ffffff");

  useEffect(()=> {
    console.log(test);
  }, [test])

  return (
    <div className="p-3">
      <p className="font-semibold">{label}</p>
      <div className="mt-5">
        <Select
         label="Font Family"
          value={values?.fontFamily}
          onChange={(newValue) => onSelectChanges.onFontFamilyChange(newValue)}
        >
          <Option value="font-sans">font-sans</Option>
          <Option value="font-serif">font-serif</Option>
          <Option value="font-mono">font-mono</Option>
        </Select>
        <Select
         label="Font Size"
          containerProps={{
            className: '!mt-7',
          }}
          onChange={(newValue) => onSelectChanges.onFontSizeChange(newValue)}
        >
          <Option value="xl">xl</Option>
          <Option value="2xl">2xl</Option>
          <Option value="3xl">3xl</Option>
          <Option value="4xl">4xl</Option>
        </Select>

        <div className={`${showButtons ? " flex" : "hidden"} gap-2 mt-4 text-xl`}>
          <IconButton
            icon={FaBold}
            message={'Vet'}
            onClick={() => onButtonClicks.Bold()}
            className={`dark:text-dark-text ${values?.isBold ? classNameButtons : ""}`}
          />

          <IconButton
            icon={FaItalic}
            message={'Cursief'}
            onClick={() => onButtonClicks.Cursive()}
            className={`dark:text-dark-text ${values?.isCursive ? classNameButtons : ""}`}
          />
          <IconButton
            icon={FaUnderline}
            message={'Onderstrepen'}
            onClick={() => onButtonClicks.Underlined()}
            className={`dark:text-dark-text ${values?.isUnderlined ? classNameButtons : ""}`}
          />
        </div>


        <div className="mt-4">
          <input
            type="color"
            value={values?.fontColor}
            onChange={(e)=> onChangeColor(e.target.value)}
            style={{
              border: '1px solid #ddd',
              borderRadius: '4px',
              width: '40px',
              height: '40px',
              cursor: 'pointer',
              padding: '0'
            }}
          />
        </div>
    </div>
    </div >
  );
}

export default FontStylingOptions;
