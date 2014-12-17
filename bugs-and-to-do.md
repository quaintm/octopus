###Monica's to do:

1. case details -- see staff members on case form

2. add other staff besides lead to new case form-- with tags

NB: There are some problems here, tags works as an autocomplete & a selector meaning you can have
new tags in the field. The problem with users is that they are non-extendable (no new ones)
so we'd have to work on a more difficult set of logic to fix the issue. It's doable, but you'd
likely need to dive into the javascript to *disable* X being a valid tag if it's not already known.
We could handle it on the server, but that's bad UI. I recommend Multi-Select

3. ~~case lead change doesn't work right now~~ Done

4. ~~change #CRD to string~~ Done


Notes from demo:

* Change CSV in tables from buttons to clickable rows
* Change edit button to text or apply tooltip
* Markdown how-to
* File link > browseable window
* Tasks
  -- auth
  -- views
* Projects 
  -- eg, NEAT2, NEAT3, MARS

##Case additions
* Case Status select and filter
  -- Pre Exam
  -- In Field
  -- Evaluation Phase
  -- Complete
* IARD / MARS
* Findings box
* Enforcement actions
* QAU involvement:
  -- Trade blotter analysis
  -- Doc Review
  -- In Field
* Initial Request Box
* Company Info Box

* Email Support
* Flash account changes on login
* Logging time on cases / projects
* Related CRDs
