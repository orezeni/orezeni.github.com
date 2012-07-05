task :default => [:preview]

# Usage: rake preveiw
desc "Launch preview environment"
task :preview do
	sh "jekyll --server --auto"
end

desc "deploy GitHub:Pages"
task :deploy do
	sh "git checkout master"
	sh "git push -f git@github.com:orezeni/orezeni.github.com.git master"
end

