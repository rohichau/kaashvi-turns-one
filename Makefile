PORT ?= 8000
DIR  := $(CURDIR)

.PHONY: help serve run open stop

help:
	@echo "Kaashvi birthday site"
	@echo ""
	@echo "  make serve   Start local server at http://localhost:$(PORT)"
	@echo "  make run     Alias for serve"
	@echo "  make open    Start server and open in browser"
	@echo "  make stop    Stop the server on port $(PORT)"
	@echo ""
	@echo "Override port: make serve PORT=3000"

serve run:
	@echo "Serving $(DIR) at http://localhost:$(PORT)"
	@echo "Press Ctrl+C to stop"
	python3 -m http.server $(PORT)

open:
	@echo "Opening http://localhost:$(PORT)"
	@(sleep 1 && open "http://localhost:$(PORT)") &
	python3 -m http.server $(PORT)

stop:
	@-lsof -ti tcp:$(PORT) | xargs kill 2>/dev/null || true
	@echo "Stopped anything on port $(PORT)"
