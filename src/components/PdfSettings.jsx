export default function PdfSettings({
settings,
setSettings,
}) {
return ( <div
   className="
   border
   p-3
   rounded-lg
   bg-white
   dark:bg-slate-700
   text-slate-900
   dark:text-white
   "
 >
  <h2
    className="
    text-xl
    font-bold
    mb-4
    "
  >
    PDF Settings
  </h2>

  <div
    className="
    grid
    md:grid-cols-2
    gap-4
    "
  >

    <select
      value={
        settings.pageSize
      }
      onChange={(e) =>
        setSettings({
          ...settings,
          pageSize:
            e.target.value,
        })
      }
    >
      <option value="a4">
        A4
      </option>

      <option value="letter">
        Letter
      </option>

      <option value="legal">
        Legal
      </option>
    </select>

    <select
      value={
        settings.orientation
      }
      onChange={(e) =>
        setSettings({
          ...settings,
          orientation:
            e.target.value,
        })
      }
    >
      <option value="portrait">
        Portrait
      </option>

      <option value="landscape">
        Landscape
      </option>
    </select>

    <select
      value={
        settings.quality
      }
      onChange={(e) =>
        setSettings({
          ...settings,
          quality:
            Number(
              e.target.value
            ),
        })
      }
    >
      <option value="1">
        High Quality
      </option>

      <option value="0.8">
        Medium
      </option>

      <option value="0.5">
        Compressed
      </option>
    </select>

    <select
      value={
        settings.margin
      }
      onChange={(e) =>
        setSettings({
          ...settings,
          margin:
            Number(
              e.target.value
            ),
        })
      }
    >
      <option value="0">
        No Margin
      </option>

      <option value="5">
        Small Margin
      </option>

      <option value="10">
        Medium Margin
      </option>
    </select>

  </div>

</div>

);
}
