require 'csv'

#Reading from
CSV.foreach(ARGV[0]) do |row|
    puts row[2]
end

=begin
CSV.open("path/to/file.csv", "wb") do |csv|
  csv << ["row", "of", "CSV", "data"]
  csv << ["another", "row"]
  # ...
end
=end
