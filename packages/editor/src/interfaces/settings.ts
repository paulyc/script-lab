// Note: this must be kept in sync with the src/SettingsJSONSchema.ts
interface IEditorSettings {
  theme: string
  font: {
    family: string
    size: number
  }
  minimap: boolean
  tabSize: 2 | 4
  prettier: {
    enabled: boolean
    autoFormat: boolean
  }
  folding: boolean
  // linter: {
  //   mode: string
  // }
  wordWrap: 'on' | 'off' | 'bounded'
}

interface IHostSpecificSettings {
  officeOnline: {
    openEditorInNewTab: string
  }
}

interface IDefaultActions {
  applySettings: string
  gistImport: string
}

interface ISettings {
  editor: IEditorSettings
  // hostSpecific: IHostSpecificSettings
  // defaultActions: IDefaultActions
  environment: string
}
