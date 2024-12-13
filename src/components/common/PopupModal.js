import { Dialog, DialogContent, DialogTitle } from "@mui/material";

export default function PopupModal({
  open,
  minWidth = 500,
  maxWidth = "md",
  onClose,
  children,
}) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth={maxWidth}
      PaperProps={{
        sx: {
          minWidth: minWidth,
        },
      }}
    >
      <DialogContent sx={{ p: 1 }}>{children}</DialogContent>
    </Dialog>
  );
}
