; MoneyTracker by M.Amine - custom installer
!macro customHeader
  !system "echo Installing MoneyTracker by M.Amine..."
!macroend

!macro customInit
  ; Check for existing installation and offer to keep data
!macroend

!macro customInstall
  ; Create AppData directory for database
  CreateDirectory "$APPDATA\MoneyTracker"
!macroend
